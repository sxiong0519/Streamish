using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Streamish.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Streamish.Utils;

namespace Streamish.Repositories
{
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

        public List<UserProfile> GetAll()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT * FROM UserProfile u LEFT JOIN Video v on u.Id = v.UserProfileId";

                    SqlDataReader reader = cmd.ExecuteReader();

                    List<UserProfile> profiles = new List<UserProfile>();

                    while (reader.Read())
                    {
                        profiles.Add(new UserProfile
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            Email = reader.GetString(reader.GetOrdinal("Email")),
                            ImageUrl = reader.IsDBNull(reader.GetOrdinal("ImageUrl")) ? null : reader.GetString(reader.GetOrdinal("ImageUrl")),
                            DateCreated = reader.GetDateTime(reader.GetOrdinal("DateCreated"))
                        });
                    }
                    reader.Close();
                    return profiles;
                }
            }
        }

        public UserProfile GetById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT * 
                                        FROM UserProfile u 
                                        LEFT JOIN Video v on u.Id = v.UserProfileId
                                        WHERE u.Id = @id";
                    cmd.Parameters.AddWithValue("@id", id);

                    SqlDataReader reader = cmd.ExecuteReader();

                    UserProfile profile = null;

                    if(reader.Read())
                    {
                        profile = new UserProfile
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            Email = reader.GetString(reader.GetOrdinal("Email")),
                            ImageUrl = reader.IsDBNull(reader.GetOrdinal("ImageUrl")) ? null : reader.GetString(reader.GetOrdinal("ImageUrl")),
                            DateCreated = reader.GetDateTime(reader.GetOrdinal("DateCreated"))
                        };
                    }
                    reader.Close();
                    return profile;
                }
            }
        }
    }
}
