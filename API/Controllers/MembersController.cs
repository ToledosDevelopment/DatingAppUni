using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
namespace API.Controllers;
[Authorize]
public class MembersController(AppDbContext context) : BaseApiController
{
    [HttpGet]
    public ActionResult<IReadOnlyList<AppUser>> GetMembers()
    {
        return Ok(context.Users.ToList());
    }

    [AllowAnonymous]
    [HttpGet("{id}")]
    public ActionResult<AppUser> GetMember(string id)
    {
        var member = context.Users.Find(id);
        if (member == null) return NotFound();

        return Ok(member);
    }
}