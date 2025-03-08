var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
//app.UseStaticFiles();
app.Use(async (context, next) =>
{
    if (context.Request.Path.Value.Contains("/end"))
    {
        await context.Response.WriteAsync("Request ended here.");
        return;
    }
    await next();
});

app.Use(async (context, next) =>
{
    await context.Response.WriteAsync("Hello1\n");
    await next();
});

app.Use(async (context, next) =>
{
    await context.Response.WriteAsync("Hello2\n");
    await next();
});

app.Use(async (context, next) =>
{
    if (context.Request.Path.Value.Contains("hello"))
    {
        await context.Response.WriteAsync("Hello\n");
    }
    await next();
});

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
