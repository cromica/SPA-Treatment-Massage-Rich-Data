using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SPATreatment.DataAccess.Model;

namespace SPATreatment.DataAccess
{
    public class EventConfiguration: EntityTypeConfiguration<Event>
    {
        public EventConfiguration()
        {
            HasKey(e => e.Id);

            Property(e => e.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            Property(e => e.Name).IsRequired();
        }
    }
}
