using Microsoft.EntityFrameworkCore.Migrations;

namespace RollerbladingBuyersGuide.Migrations
{
    public partial class AddPhotoURLToRestaurant : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PhotoURL",
                table: "Rollerblades",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhotoURL",
                table: "Rollerblades");
        }
    }
}
