using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Budget_Application.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Budget_Application.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BudgetController : ControllerBase
    {
        [HttpGet]
        public BudgetVM Get()
        {
            return new BudgetVM
            { Month = Enum.GetName(typeof(Months), DateTime.UtcNow.Month),
                Accommodation = 5000,
                Entertainment = 2000,
                Food = 800,
                Income = 22000
                
            };
           
        }
    }
}
