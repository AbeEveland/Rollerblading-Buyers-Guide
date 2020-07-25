using Microsoft.EntityFrameworkCore.Migrations;

namespace RollerbladingBuyersGuide.Migrations
{
    public partial class CompletedRollerblade : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Boot",
                table: "Rollerblades");

            migrationBuilder.DropColumn(
                name: "Environment",
                table: "Rollerblades");

            migrationBuilder.DropColumn(
                name: "Priority",
                table: "Rollerblades");

            migrationBuilder.DropColumn(
                name: "Suggestion",
                table: "Rollerblades");

            migrationBuilder.DropColumn(
                name: "UserName",
                table: "Rollerblades");

            migrationBuilder.AlterColumn<string>(
                name: "Skill",
                table: "Rollerblades",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Rollerblades",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AddColumn<string>(
                name: "Fit",
                table: "Rollerblades",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MANEUVERABILITY",
                table: "Rollerblades",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Speed",
                table: "Rollerblades",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Fit",
                table: "Rollerblades");

            migrationBuilder.DropColumn(
                name: "MANEUVERABILITY",
                table: "Rollerblades");

            migrationBuilder.DropColumn(
                name: "Speed",
                table: "Rollerblades");

            migrationBuilder.AlterColumn<string>(
                name: "Skill",
                table: "Rollerblades",
                type: "text",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Rollerblades",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Boot",
                table: "Rollerblades",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Environment",
                table: "Rollerblades",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Priority",
                table: "Rollerblades",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Suggestion",
                table: "Rollerblades",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "Rollerblades",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
