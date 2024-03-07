using System;
using System.Collections.Generic;

namespace CDAC_FINAL_PROJECT_.NET.Models;

public partial class Approvalstatus
{
    public int Aid { get; set; }

    public DateOnly? Requestdate { get; set; }

    public DateOnly? Responsedate { get; set; }

    public int? Status { get; set; }

    public int? Propertyid { get; set; }

    public int? Userid { get; set; }

    public virtual Property? Property { get; set; }

    public virtual User? User { get; set; }
}
