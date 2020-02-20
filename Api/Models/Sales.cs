using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Hub.Models
{
    public class Sales
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(20)")]
        public string Date { get; set; }

        [Required]
        [Column(TypeName = "float")]
        public double Total { get; set; }
    }
}
