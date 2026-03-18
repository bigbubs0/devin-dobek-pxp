# How to Edit Your Website

Your portfolio site auto-deploys whenever you make a change on GitHub. No coding tools needed - you can edit everything from your phone or browser.

---

## One-Time Setup (5 minutes)

### 1. Create a GitHub Account
- Go to [github.com](https://github.com) and click **Sign up**
- Use any email. Free plan is all you need.
- Pick a username (this will be visible publicly)

### 2. Accept the Collaborator Invite
- Check your email for an invite from Bryan to the `devin-dobek-pxp` repo
- Click **Accept invitation**
- You now have edit access to your site's code

### 3. Create a Netlify Account
- Go to [netlify.com](https://www.netlify.com) and click **Sign up**
- **Sign up with GitHub** (use the account you just created)
- Free plan is all you need
- Once Bryan transfers the site to your account, you'll see it in your Netlify dashboard

---

## How to Make Edits

### Editing Text on Your Site

1. Go to [github.com/bigbubs0/devin-dobek-pxp](https://github.com/bigbubs0/devin-dobek-pxp)
2. Click on `index.html` (this is your main page)
3. Click the **pencil icon** (top right of the file) to edit
4. Find the text you want to change and update it
5. Click the green **Commit changes** button
6. Add a short note like "Updated bio" and click **Commit changes**
7. Your site will update automatically in about 30 seconds

### What You Can Safely Change

- **Text content** - anything between `>` and `<` tags is usually safe to edit
  - Example: `<p>Your bio text here</p>` - change "Your bio text here" to whatever you want
- **Links** - URLs inside `href="..."`
  - Example: `<a href="https://instagram.com/devindobekpxp">` - update the URL
- **Image alt text** - descriptions inside `alt="..."`

### What to Be Careful With

- Don't delete or change anything that looks like code (`<div>`, `class=`, `style=`, etc.)
- Don't remove closing tags (`</div>`, `</section>`, etc.)
- If something breaks, you can always undo by going to the commit history and reverting

### Adding New Images

1. On the GitHub repo page, click into the `images/` folder
2. Click **Add file** > **Upload files**
3. Drag your image in and commit
4. Reference it in your HTML as `images/your-filename.jpg`

---

## Quick Reference

| What | Where |
|------|-------|
| Your live site | [devin-dobek-pxp.netlify.app](https://devin-dobek-pxp.netlify.app) |
| Edit your site | [github.com/bigbubs0/devin-dobek-pxp](https://github.com/bigbubs0/devin-dobek-pxp) |
| Netlify dashboard | [app.netlify.com](https://app.netlify.com) |
| Deploy status | Check Netlify dashboard after pushing a change |

---

## If Something Goes Wrong

- **Site looks broken after an edit:** Go to your repo on GitHub, click the clock icon ("History"), find the last working version, and click "Revert"
- **Can't figure it out:** Text Bryan and he'll fix it
