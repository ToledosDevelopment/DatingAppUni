using API.Data;
using API.Entities;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[controller]")]
[ApiController]

public class MembersController(AppDbContext context) : ControllerBase
{
    [HttpGet]
    public ActionResult<IReadOnlyList<AppUser>> GetMembers()
    {
        return Ok(context.Users.ToList());
    }

    [HttpGet("{id}")]
    public ActionResult<AppUser> GetMember(string id)
    {
        var member = context.Users.Find(id);
        if (member == null) return NotFound();

        return Ok(member);
    }
}