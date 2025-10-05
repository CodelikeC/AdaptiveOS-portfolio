Chuẩn bài 👌 — tao sẽ hướng dẫn mày **từng bước triển khai portfolio cá nhân của dự án Adaptive AI**, từ việc chọn công cụ → cài đặt → chạy thử → deploy lên web.
Tao chia thành **2 giai đoạn**:
1️⃣ *Làm việc local trên máy (build & preview)*
2️⃣ *Deploy lên Internet (public site, miễn phí)*

---

## 🧰 GIAI ĐOẠN 1 — CÔNG CỤ CẦN CÓ TRÊN MÁY

### ⚙️ 1. Node.js + npm

**Bắt buộc** để chạy Next.js (framework xây web hiện đại).

* Vào [https://nodejs.org](https://nodejs.org)
* Chọn **LTS version (khuyên: 20.x hoặc 22.x)**.
* Cài xong kiểm tra:

  ```bash
  node -v
  npm -v
  ```
* (Nếu dùng Windows, cài qua installer, sẽ kèm npm sẵn.)

---

### ⚙️ 2. Git

Dùng để clone repo và deploy tự động lên GitHub/Vercel.

* [https://git-scm.com/downloads](https://git-scm.com/downloads)
* Sau khi cài:

  ```bash
  git --version
  ```

---

### ⚙️ 3. Code Editor

**Khuyên dùng:** Visual Studio Code
→ [https://code.visualstudio.com/](https://code.visualstudio.com/)
Cài các extensions:

* Prettier (format code)
* Tailwind CSS IntelliSense
* GitHub Pull Requests and Issues

---

### ⚙️ 4. Tạo project Next.js

Sau khi cài xong Node & Git:

```bash
# tạo folder mới
mkdir tri-portfolio
cd tri-portfolio

# tạo project Next.js
npx create-next-app@latest
```

* Tên project: `adaptive-portfolio`
* TypeScript: **Yes**
* ESLint: **Yes**
* Tailwind CSS: **Yes**
* App Router: **Yes**
* Import alias: `@/*`

Sau khi tạo xong:

```bash
cd adaptive-portfolio
npm run dev
```

Truy cập **[http://localhost:3000](http://localhost:3000)** → thấy giao diện mặc định của Next.js.

---

## 🎨 GIAI ĐOẠN 2 — TÍCH HỢP PORTFOLIO TEMPLATE

Sau khi chạy được Next.js default, mày có thể thay layout bằng cấu trúc tao thiết kế ở trên.

Tao có thể **tạo sẵn code khung cho mày**, gồm:

* Home (Vision)
* Projects (Adaptive AI, IBCS, AIForDriver)
* Philosophy
* Timeline
* Navbar/Footer

→ Mày chỉ việc copy paste vào `pages/` hoặc `app/` folder của Next.js rồi chạy.

Nếu mày xác nhận, tao sẽ:

> 🧩 sinh file project thật (`index.tsx`, `projects.tsx`, `philosophy.tsx`, `timeline.tsx`, `Navbar.tsx`, `Footer.tsx`, `package.json`, `tailwind.config.js`, …)
> để mày paste nguyên vẹn vào `adaptive-portfolio/` là chạy được liền.

---

## ☁️ GIAI ĐOẠN 3 — DEPLOY (miễn phí)

Sau khi chạy ổn local → deploy online cực nhanh.

### 🚀 1. Tạo tài khoản GitHub + Vercel

* GitHub: [https://github.com](https://github.com)
* Vercel: [https://vercel.com](https://vercel.com)

Kết nối:

1. Đăng nhập Vercel → chọn **Add New Project**
2. Chọn repo GitHub `adaptive-portfolio`
3. Bấm **Deploy**
4. Sau vài phút có link dạng:
   `https://adaptive-portfolio.vercel.app`

Lúc này portfolio của mày **đã public trên web**.

---

## 🧠 BONUS — CÔNG CỤ BỔ TRỢ CHUYÊN NGHIỆP

Nếu muốn nâng cấp dần:

| Công cụ                 | Mục đích                                   | Ghi chú                      |
| ----------------------- | ------------------------------------------ | ---------------------------- |
| **MDX**                 | Viết blog bằng Markdown + JSX              | tích hợp với Next.js dễ      |
| **Framer Motion**       | Animation smooth                           | thêm cảm giác "trí tuệ sống" |
| **Vercel Analytics**    | Theo dõi traffic                           | có sẵn, chỉ cần bật          |
| **GitHub API**          | Hiển thị stats dự án                       | repo stars, commit count     |
| **Supabase/Firebase**   | Nếu sau muốn có contact form động          | optional                     |
| **Plausible Analytics** | Privacy-friendly analytics thay cho Google | optional                     |

---

## 🧩 TÓM TẮT CẦN DOWNLOAD

1. Node.js (>=20)
2. Git
3. Visual Studio Code
4. (Tuỳ chọn: Vercel CLI nếu muốn deploy bằng dòng lệnh)

   ```bash
   npm i -g vercel
   vercel login
   vercel
   ```

---

Nếu mày đồng ý, tao sẽ **tạo cho mày code skeleton Next.js + Tailwind hoàn chỉnh**, chứa:
✅ Home
✅ Projects
✅ Philosophy
✅ Timeline
✅ Navbar/Footer

→ Chạy được ngay bằng `npm run dev`.

Mày muốn tao generate bộ code đó luôn chứ?
(Chỉ cần mày xác nhận style: **Dark Minimalist** hay **Light Modern** thôi.)
