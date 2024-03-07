using System;
using System.Collections.Generic;

namespace CDAC_FINAL_PROJECT_.NET.Models;

public partial class User
{
    public int Userid { get; set; }

    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string? Aadharcardno { get; set; }

    public string Emailid { get; set; } = null!;

    public string? Phonenumber { get; set; }

    public int? Roleid { get; set; }

    public string? Address { get; set; }

    public int? Pincode { get; set; }

    public virtual ICollection<Approvalstatus> Approvalstatuses { get; set; } = new List<Approvalstatus>();

    public virtual ICollection<Property> Properties { get; set; } = new List<Property>();

    public virtual Role? Role { get; set; }
}
