﻿using System.ComponentModel.DataAnnotations;

namespace Crito.Models
{
    public class ContactFormEntity
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Message { get; set; } = null!;
  
    }

}

