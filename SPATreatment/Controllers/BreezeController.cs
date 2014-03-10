using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Breeze.ContextProvider;
using Breeze.WebApi2;
using Newtonsoft.Json.Linq;
using SPATreatment.DataAccess;

namespace SPATreatment.Controllers
{
    [BreezeController]
    public class BreezeController : ApiController
    {
        private readonly  SPATreatmentRepository repository = new SPATreatmentRepository();
        [HttpGet]
        public string Metadata()
        {
            return repository.Metadata;
        }

        [HttpPost]
        public SaveResult SaveChanges(JObject saveBundle)
        {
            return repository.SaveChanges(saveBundle);
        }

        [HttpGet]
        public IQueryable<object> Events()
        {
            return repository.Events;
        }

        [HttpGet]
        public string Ping()
        {
            return "Pong";
        }
    }
}
