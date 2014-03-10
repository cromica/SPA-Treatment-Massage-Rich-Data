using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SPATreatment.DataAccess.Model
{
    public class Event
    {
        public Int32 Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime EventDate { get; set; }

        public int TotalNumberOfPlaces { get; set; }

        public int OcupiedPlaces { get; set; }
    }
}
