using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget_Application.Migrations
{
    public partial class Create : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "Budget");

            migrationBuilder.AddColumn<string>(
                name: "Month",
                table: "Budget",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Year",
                table: "Budget",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Month",
                table: "Budget");

            migrationBuilder.DropColumn(
                name: "Year",
                table: "Budget");

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Budget",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
