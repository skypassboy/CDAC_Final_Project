using System;
using System.Collections.Generic;

namespace CDAC_FINAL_PROJECT_.NET.Models;

public partial class Property
{
    public int Propertyid { get; set; }

    public int? Userid { get; set; }

    public string Address { get; set; } = null!;

    public int? Propertyareasqft { get; set; }

    public int Bhk { get; set; }

    public int Rent { get; set; }

    public int? Deposit { get; set; }

    public string Furnished { get; set; } = null!;

    public ulong? Parking { get; set; }

    public int? Nooftoilets { get; set; }

    public ulong? Wifi { get; set; }

    public ulong? Gasconnection { get; set; }

    public ulong? Lift { get; set; }

    public int? Floorno { get; set; }

    public ulong? Watergeyser { get; set; }

    public string? Tenanttype { get; set; }

    public int? Pincode { get; set; }

    public virtual ICollection<Approvalstatus> Approvalstatuses { get; set; } = new List<Approvalstatus>();

    public virtual Area? PincodeNavigation { get; set; }

    public virtual User? User { get; set; }
}
