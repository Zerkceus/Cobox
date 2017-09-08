﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HouseOfSynergy.AffinityDms.Entities;
using HouseOfSynergy.AffinityDms.Entities.Tenants;

namespace HouseOfSynergy.AffinityDms.DataLayer.Configurations.Tenants
{
    public partial class LogConfiguration :
        EntityTypeConfiguration<Log>
    {
        public LogConfiguration()
        {
            // Table name in database.
            this.ToTable("Log");

            // Primary key.
            this.HasKey<long>(p => p.Id);
            // Auto-increment will be handled by the database.
            this.Property(p => p.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

        }
    }
}
