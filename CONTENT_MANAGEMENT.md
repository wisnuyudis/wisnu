# Content Management Guide

## 🚀 Blog Sudah Live!
Website: https://wisnuyudis.github.io/wisnu

## 📝 Cara Edit Blog Post

### Metode 1: GitHub Editor (Mudah)
1. Buka: https://github.com/wisnuyudis/wisnu/tree/main/content/blog
2. Klik file `.md` yang mau diedit
3. Klik tombol ✏️ (Edit this file)
4. Edit contentnya
5. Scroll ke bawah, isi commit message
6. Klik "Commit changes"
7. Website otomatis update dalam 1-2 menit

### Metode 2: Buat Post Baru via GitHub
1. Buka: https://github.com/wisnuyudis/wisnu/tree/main/content/blog
2. Klik "Add file" → "Create new file"
3. Nama file: `judul-post-baru.md`
4. Copy template dari post yang sudah ada
5. Edit content
6. Commit changes

### Template Post Baru:
```markdown
---
title: "Judul Post Baru"
date: "2024-12-19"
description: "Deskripsi singkat post"
tags: ["javascript", "web"]
---

# Judul Post

Content blog post di sini...

## Sub heading

More content...
```

## 📁 Struktur Content

```
content/
├── blog/           # Blog posts (.md files)
├── pages/          # Static pages
└── assets/         # Images, etc
```

## 🎯 Tips
- Setiap edit otomatis trigger build & deploy
- Tunggu 1-2 menit setelah commit untuk lihat perubahan
- Preview markdown di GitHub sebelum commit
- Gunakan commit message yang jelas

## 🔧 Development Local
```bash
yarn develop
# Buka http://localhost:8000
```

## 🚀 Deploy Manual
```bash
yarn deploy
```