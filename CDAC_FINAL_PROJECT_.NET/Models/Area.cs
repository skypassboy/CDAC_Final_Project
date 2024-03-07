using System;
using System.Collections.Generic;

namespace CDAC_FINAL_PROJECT_.NET.Models;

public partial class Area
{
    public int Pincode { get; set; }

    public string Areaname { get; set; } = null!;

    public int? Cityid { get; set; }

    public virtual City? City { get; set; }

    public virtual ICollection<Property> Properties { get; set; } = new List<Property>();
}
