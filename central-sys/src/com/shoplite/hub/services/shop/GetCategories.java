package com.shoplite.hub.services.shop;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import com.shoplite.models.Location;

@Path("getcategories") 
public class GetCategories {

	@POST
	@Consumes({ MediaType.APPLICATION_JSON})
	@Produces({ MediaType.APPLICATION_JSON})
	public Location getCategories(@Context HttpServletRequest request,@Context HttpServletResponse response,Location location ) {
		return location;
	}


}
