using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SPATreatment.DataAccess.Model;

namespace SPATreatment.DataAccess
{
    public class SPATreatmentDbContext: DbContext
    {
        static SPATreatmentDbContext()
        {
            Database.SetInitializer<SPATreatmentDbContext>(null);
        }

        public SPATreatmentDbContext():base("SPATreatment")
        {
            
        }

        public DbSet<Event> Events { get; set; }
    }
}
