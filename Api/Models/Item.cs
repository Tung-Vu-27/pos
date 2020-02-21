using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Item
    {
        [Key]
        public int Id { get; set; }

        public int SaleId { get; set; }

        [Required]
        [Column(TypeName = "varchar(20)")]
        public string Name { get; set; }

        [Required]
        [Column(TypeName = "int")]
        public int Total { get; set; }

        [Required]
        [Column(TypeName = "float")]
        public double UnitPrice { get; set; }

        [Required]
        [Column(TypeName = "float")]
        public double SubTotal { get; set; }
    }
}
