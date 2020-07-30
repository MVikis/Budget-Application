using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Budget_Application.Models
{
    public enum Months
    {
        January = 1, February, March, April, May, June, July, August, September, October, November, December
    }
    public class BudgetVM
    {
        public string Month { get; set; }

        public double Income { get; set; }

        public double Accommodation { get; set; }
        public double Entertainment { get; set; }
        public double Food { get; set; }

    }
}
