using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Breeze.ContextProvider;
using Breeze.WebApi2;
using Newtonsoft.Json.Linq;

namespace SPATreatment.Controllers
{
    [BreezeController]
    public class BreezeController : ApiController
    {
        [HttpGet]
        public string Metadata()
        {
            return string.Empty;
        }

        [HttpPost]
        public SaveResult SaveChanges(JObject saveBundle)
        {
            return new SaveResult();
        }

        [HttpGet]
        public IQueryable<object> Events()
        {
            return null;
        }
    }
}
