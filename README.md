# Personal academic profile

A dependency-free, responsive personal profile site for Wenhan (Danny) Guo 郭文瀚. Replace the remaining `[placeholder]` values in `index.html`, then add a real CV at `assets/cv.pdf` (or change that link).

## Publish with GitHub Pages

1. Create an empty, public GitHub repository named `wenhanguo.github.io`.
2. In this folder, run:

   ```bash
   git init
   git add .
   git commit -m "Initial personal site"
   git branch -M main
   git remote add origin https://github.com/wenhanguo/wenhanguo.github.io.git
   git push -u origin main
   ```

3. On GitHub, open the repository’s **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`, and save.
4. GitHub will publish it at `https://wenhanguo.github.io`.

It can take a couple of minutes for the first deployment. Subsequent pushes to `main` publish automatically.
