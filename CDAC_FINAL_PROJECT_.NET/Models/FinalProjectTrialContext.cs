using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Scaffolding.Internal;

namespace CDAC_FINAL_PROJECT_.NET.Models;

public partial class FinalProjectTrialContext : DbContext
{
    public FinalProjectTrialContext()
    {
    }

    public FinalProjectTrialContext(DbContextOptions<FinalProjectTrialContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Approvalstatus> Approvalstatuses { get; set; }

    public virtual DbSet<Area> Areas { get; set; }

    public virtual DbSet<City> Cities { get; set; }

    public virtual DbSet<Property> Properties { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=final_project_trial", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.34-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Approvalstatus>(entity =>
        {
            entity.HasKey(e => e.Aid).HasName("PRIMARY");

            entity.ToTable("approvalstatus");

            entity.HasIndex(e => e.Userid, "FKecrsbknqcsquio61vw467eshm");

            entity.HasIndex(e => e.Propertyid, "fk_property");

            entity.Property(e => e.Aid).HasColumnName("aid");
            entity.Property(e => e.Propertyid).HasColumnName("propertyid");
            entity.Property(e => e.Requestdate).HasColumnName("requestdate");
            entity.Property(e => e.Responsedate).HasColumnName("responsedate");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.Userid).HasColumnName("userid");

            entity.HasOne(d => d.Property).WithMany(p => p.Approvalstatuses)
                .HasForeignKey(d => d.Propertyid)
                .HasConstraintName("fk_property");

            entity.HasOne(d => d.User).WithMany(p => p.Approvalstatuses)
                .HasForeignKey(d => d.Userid)
                .HasConstraintName("FKecrsbknqcsquio61vw467eshm");
        });

        modelBuilder.Entity<Area>(entity =>
        {
            entity.HasKey(e => e.Pincode).HasName("PRIMARY");

            entity.ToTable("area");

            entity.HasIndex(e => e.Cityid, "area_ibfk_1");

            entity.Property(e => e.Pincode)
                .ValueGeneratedNever()
                .HasColumnName("pincode");
            entity.Property(e => e.Areaname)
                .HasMaxLength(50)
                .HasColumnName("areaname");
            entity.Property(e => e.Cityid).HasColumnName("cityid");

            entity.HasOne(d => d.City).WithMany(p => p.Areas)
                .HasForeignKey(d => d.Cityid)
                .HasConstraintName("area_ibfk_1");
        });

        modelBuilder.Entity<City>(entity =>
        {
            entity.HasKey(e => e.Cityid).HasName("PRIMARY");

            entity.ToTable("city");

            entity.Property(e => e.Cityid).HasColumnName("cityid");
            entity.Property(e => e.Cityname)
                .HasMaxLength(50)
                .HasColumnName("cityname");
        });

        modelBuilder.Entity<Property>(entity =>
        {
            entity.HasKey(e => e.Propertyid).HasName("PRIMARY");

            entity.ToTable("property");

            entity.HasIndex(e => e.Pincode, "pincode");

            entity.HasIndex(e => e.Userid, "userid");

            entity.Property(e => e.Propertyid).HasColumnName("propertyid");
            entity.Property(e => e.Address)
                .HasMaxLength(200)
                .HasColumnName("address");
            entity.Property(e => e.Bhk).HasColumnName("bhk");
            entity.Property(e => e.Deposit).HasColumnName("deposit");
            entity.Property(e => e.Floorno).HasColumnName("floorno");
            entity.Property(e => e.Furnished)
                .HasMaxLength(20)
                .HasColumnName("furnished");
            entity.Property(e => e.Gasconnection)
                .HasColumnType("bit(1)")
                .HasColumnName("gasconnection");
            entity.Property(e => e.Lift)
                .HasColumnType("bit(1)")
                .HasColumnName("lift");
            entity.Property(e => e.Nooftoilets).HasColumnName("nooftoilets");
            entity.Property(e => e.Parking)
                .HasColumnType("bit(1)")
                .HasColumnName("parking");
            entity.Property(e => e.Pincode).HasColumnName("pincode");
            entity.Property(e => e.Propertyareasqft).HasColumnName("propertyareasqft");
            entity.Property(e => e.Rent).HasColumnName("rent");
            entity.Property(e => e.Tenanttype)
                .HasMaxLength(20)
                .HasColumnName("tenanttype");
            entity.Property(e => e.Userid).HasColumnName("userid");
            entity.Property(e => e.Watergeyser)
                .HasColumnType("bit(1)")
                .HasColumnName("watergeyser");
            entity.Property(e => e.Wifi)
                .HasColumnType("bit(1)")
                .HasColumnName("wifi");

            entity.HasOne(d => d.PincodeNavigation).WithMany(p => p.Properties)
                .HasForeignKey(d => d.Pincode)
                .HasConstraintName("property_ibfk_3");

            entity.HasOne(d => d.User).WithMany(p => p.Properties)
                .HasForeignKey(d => d.Userid)
                .HasConstraintName("property_ibfk_1");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.Roleid).HasName("PRIMARY");

            entity.ToTable("role");

            entity.Property(e => e.Roleid).HasColumnName("roleid");
            entity.Property(e => e.Rolename)
                .HasMaxLength(20)
                .HasColumnName("rolename");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Userid).HasName("PRIMARY");

            entity.ToTable("user");

            entity.HasIndex(e => e.Aadharcardno, "AadharCard_No").IsUnique();

            entity.HasIndex(e => e.Emailid, "Email_ID").IsUnique();

            entity.HasIndex(e => e.Roleid, "user_ibfk_1");

            entity.Property(e => e.Userid).HasColumnName("userid");
            entity.Property(e => e.Aadharcardno)
                .HasMaxLength(20)
                .HasColumnName("aadharcardno");
            entity.Property(e => e.Address)
                .HasMaxLength(200)
                .HasColumnName("address");
            entity.Property(e => e.Emailid)
                .HasMaxLength(30)
                .HasColumnName("emailid");
            entity.Property(e => e.Password)
                .HasMaxLength(50)
                .HasColumnName("password");
            entity.Property(e => e.Phonenumber)
                .HasMaxLength(15)
                .HasColumnName("phonenumber");
            entity.Property(e => e.Pincode).HasColumnName("pincode");
            entity.Property(e => e.Roleid).HasColumnName("roleid");
            entity.Property(e => e.Username)
                .HasMaxLength(30)
                .HasColumnName("username");

            entity.HasOne(d => d.Role).WithMany(p => p.Users)
                .HasForeignKey(d => d.Roleid)
                .HasConstraintName("user_ibfk_1");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
