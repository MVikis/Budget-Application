using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Budget_Application.Models
{
    public class BudgetList
    {
        public int Year { get; set; }
        public List<Budget> Budgets { get; set; }
    }
}
