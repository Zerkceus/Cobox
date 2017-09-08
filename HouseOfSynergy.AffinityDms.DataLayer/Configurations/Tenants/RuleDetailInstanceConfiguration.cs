using System;
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
	public partial class RuleDetailInstanceConfiguration:
		EntityTypeConfiguration<RuleDetailInstance>
	{
		public RuleDetailInstanceConfiguration ()
		{
			// Table name in database.
			this.ToTable("RuleDetailInstance");

			// Primary Key.
			this.HasKey<long>(p => p.Id);
			this.Property(p => p.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

			// Foriegn Keys.
			this.HasRequired(p => p.WorkFlowRuleInstance).WithMany(p => p.RuleDetailInstances).HasForeignKey(p => p.WorkFlowRuleInstanceId);
			this.HasRequired(p => p.Template).WithMany(p => p.RuleDetailInstances).HasForeignKey(p => p.TemplateId);
			this.HasRequired(p => p.User).WithMany(p => p.RuleDetailInstances).HasForeignKey(p => p.UserId);

			// Class property validation.
			this.Property(p => p.Action).HasMaxLength(10);
			this.Property(p => p.Condition).HasMaxLength(10);
			this.Property(p => p.Value).HasMaxLength(10);
		}
	}
}