﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Breeze.ContextProvider;
using Breeze.ContextProvider.EF6;
using Newtonsoft.Json.Linq;
using SPATreatment.DataAccess.Model;

namespace SPATreatment.DataAccess
{
    public class SPATreatmentRepository
    {
        private readonly EFContextProvider<SPATreatmentDbContext> contextProvider = new EFContextProvider<SPATreatmentDbContext>();

        public string Metadata {
            get { return contextProvider.Metadata(); }
        }

        public IQueryable<Event> Events
        {
            get { return Context.Events; }
        }

        public SaveResult SaveChanges(JObject saveBundle)
        {
            return contextProvider.SaveChanges(saveBundle);
        }

        public SPATreatmentDbContext Context
        {
            get { return contextProvider.Context; }
        }
    }
}
