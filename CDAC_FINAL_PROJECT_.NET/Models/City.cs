using System;
using System.Collections.Generic;

namespace CDAC_FINAL_PROJECT_.NET.Models;

public partial class City
{
    public int Cityid { get; set; }

    public string Cityname { get; set; } = null!;

    public virtual ICollection<Area> Areas { get; set; } = new List<Area>();
}
