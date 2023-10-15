using Crito.Models;
using Microsoft.EntityFrameworkCore;

namespace Crito.Contexts
{
    public class DataContext: DbContext
    {
        protected DataContext()
        {
        }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

      
        public DbSet<ContactFormEntity> ClientMessages { get; set; }
    }
}
