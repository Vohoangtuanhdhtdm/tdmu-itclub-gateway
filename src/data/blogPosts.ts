export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Hành trình Chinh phục ICPC 2024 - Những bài học quý giá",
    slug: "hanh-trinh-chinh-phuc-icpc-2024",
    excerpt: "Chia sẻ về hành trình chuẩn bị và tham gia cuộc thi lập trình ICPC 2024, những khó khăn và bài học rút ra được.",
    content: `
# Giới thiệu

ICPC (International Collegiate Programming Contest) là một trong những cuộc thi lập trình danh giá nhất dành cho sinh viên trên toàn thế giới. Năm nay, đội tuyển TDMU IT CLUB đã có cơ hội tham gia và đạt được những thành tích đáng tự hào.

## Quá trình chuẩn bị

Để chuẩn bị cho ICPC, chúng tôi đã trải qua 6 tháng luyện tập liên tục:

- **Tháng 1-2**: Ôn luyện các thuật toán cơ bản (Sort, Search, Greedy)
- **Tháng 3-4**: Nâng cao với Dynamic Programming và Graph Theory
- **Tháng 5-6**: Luyện đề thi và làm việc nhóm

## Những khó khăn

1. **Áp lực thời gian**: Mỗi bài tập chỉ có thời gian giới hạn
2. **Làm việc nhóm**: Phải phân công và phối hợp hiệu quả
3. **Debug dưới áp lực**: Tìm lỗi nhanh trong môi trường thi đấu

## Bài học rút ra

- Sự kiên nhẫn và luyện tập đều đặn là chìa khóa
- Làm việc nhóm hiệu quả quan trọng hơn kỹ năng cá nhân
- Luôn giữ tinh thần lạc quan dù gặp khó khăn

## Kết luận

ICPC không chỉ là cuộc thi, mà còn là hành trình học hỏi và trưởng thành. Chúng tôi rất tự hào về những gì đã đạt được và mong muốn truyền cảm hứng cho các bạn sinh viên khác.
    `,
    author: "Nguyễn Minh Thắng",
    authorRole: "Phó Chủ nhiệm CLB",
    date: "2024-03-15",
    category: "Cuộc thi",
    image: "/placeholder.svg",
    tags: ["ICPC", "Lập trình", "Cuộc thi"]
  },
  {
    id: "2",
    title: "Mỗi ngày một giờ lập trình - Thói quen tạo nên sự khác biệt",
    slug: "moi-ngay-mot-gio-lap-trinh",
    excerpt: "Chương trình 'Mỗi ngày một giờ lập trình' đã giúp hàng trăm sinh viên cải thiện kỹ năng coding của mình như thế nào?",
    content: `
# Giới thiệu chương trình

"Mỗi ngày một giờ lập trình" là chương trình đào tạo thường xuyên của TDMU IT CLUB, nhằm giúp sinh viên rèn luyện kỹ năng lập trình mỗi ngày.

## Lợi ích của việc luyện tập đều đặn

### 1. Tạo thói quen học tập

Lập trình giống như học một ngôn ngữ mới. Việc thực hành đều đặn giúp não bộ ghi nhớ syntax và logic tốt hơn.

### 2. Cải thiện tư duy thuật toán

Mỗi ngày giải một bài toán mới giúp bạn:
- Nhận biết các pattern phổ biến
- Tư duy sáng tạo hơn trong việc giải quyết vấn đề
- Tối ưu hóa code tốt hơn

### 3. Xây dựng portfolio

Sau 6 tháng, bạn sẽ có:
- 180+ bài tập đã giải
- Portfolio ấn tượng trên GitHub
- Kinh nghiệm quý báu cho CV

## Cách tham gia

1. Tham gia group Facebook của CLB
2. Mỗi ngày sẽ có một bài tập được đăng lúc 8h sáng
3. Submit solution trước 23h59 cùng ngày
4. Nhận feedback từ mentor

## Thành công của các thành viên

> "Chương trình đã giúp mình từ một người mới bắt đầu trở thành Top 1 trong các kỳ thi coding của trường" - Lê Văn A, K21

## Kết luận

Hãy bắt đầu ngay hôm nay! Chỉ cần 1 giờ mỗi ngày, bạn sẽ thấy sự tiến bộ rõ rệt sau 1 tháng.
    `,
    author: "Lê Tuấn Kiệt",
    authorRole: "Phó Chủ nhiệm CLB",
    date: "2024-02-20",
    category: "Học thuật",
    image: "/placeholder.svg",
    tags: ["Học tập", "Lập trình", "Thói quen"]
  },
  {
    id: "3",
    title: "Top 10 Thuật toán mọi lập trình viên cần biết",
    slug: "top-10-thuat-toan-can-biet",
    excerpt: "Tổng hợp 10 thuật toán quan trọng nhất mà mọi lập trình viên đều nên nắm vững để giải quyết các bài toán phức tạp.",
    content: `
# Danh sách 10 thuật toán quan trọng

## 1. Binary Search (Tìm kiếm nhị phân)

Thuật toán tìm kiếm hiệu quả với độ phức tạp O(log n), thường dùng trên mảng đã được sắp xếp.

\`\`\`python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
\`\`\`

## 2. Quick Sort

Thuật toán sắp xếp phổ biến với độ phức tạp trung bình O(n log n).

## 3. Breadth-First Search (BFS)

Duyệt đồ thị theo chiều rộng, thường dùng để tìm đường đi ngắn nhất.

## 4. Depth-First Search (DFS)

Duyệt đồ thị theo chiều sâu, hữu ích trong nhiều bài toán graph.

## 5. Dynamic Programming

Kỹ thuật chia nhỏ bài toán và lưu trữ kết quả để tránh tính toán lại.

## 6. Dijkstra's Algorithm

Tìm đường đi ngắn nhất trong đồ thị có trọng số dương.

## 7. Merge Sort

Thuật toán sắp xếp ổn định với độ phức tạp O(n log n).

## 8. Hash Table

Cấu trúc dữ liệu cho phép truy xuất dữ liệu trong O(1).

## 9. Sliding Window

Kỹ thuật tối ưu cho các bài toán liên quan đến subarray/substring.

## 10. Two Pointers

Kỹ thuật sử dụng 2 con trỏ để giải quyết bài toán trên array/string.

## Kết luận

Nắm vững 10 thuật toán này sẽ giúp bạn giải quyết phần lớn các bài toán trong coding interview và competitive programming.
    `,
    author: "Võ Gia Huy",
    authorRole: "Trưởng Ban Thiết kế",
    date: "2024-01-10",
    category: "Học thuật",
    image: "/placeholder.svg",
    tags: ["Thuật toán", "Lập trình", "Tutorial"]
  },
  {
    id: "4",
    title: "Kinh nghiệm phỏng vấn Intern tại các công ty công nghệ",
    slug: "kinh-nghiem-phong-van-intern",
    excerpt: "Chia sẻ kinh nghiệm và tips để vượt qua vòng phỏng vấn Intern tại các công ty công nghệ lớn.",
    content: `
# Chuẩn bị cho phỏng vấn Intern

## Trước phỏng vấn

### 1. Nghiên cứu về công ty
- Tìm hiểu sản phẩm, dịch vụ
- Đọc về văn hóa công ty
- Xem các review của nhân viên cũ

### 2. Chuẩn bị kỹ thuật
- Ôn lại các thuật toán cơ bản
- Làm bài tập trên LeetCode, HackerRank
- Review các project đã làm

### 3. Soft skills
- Chuẩn bị câu trả lời cho các câu hỏi phổ biến
- Luyện tập kỹ năng thuyết trình
- Chuẩn bị câu hỏi để hỏi lại interviewer

## Trong phỏng vấn

### Phần Technical Interview

1. **Đọc kỹ đề bài**: Đừng vội code ngay
2. **Clarify requirements**: Hỏi các edge cases
3. **Discuss approach**: Nói về cách giải trước khi code
4. **Code sạch**: Đặt tên biến rõ ràng, có comment
5. **Test cases**: Chạy thử với các test case

### Phần Behavioral Interview

Sử dụng STAR method:
- **S**ituation: Tình huống
- **T**ask: Nhiệm vụ
- **A**ction: Hành động
- **R**esult: Kết quả

## Sau phỏng vấn

1. Gửi thank you email trong vòng 24h
2. Theo dõi kết quả sau 1 tuần
3. Học hỏi từ những sai sót (nếu có)

## Tips từ các anh chị đi trước

> "Đừng sợ hỏi khi không hiểu đề. Interviewer muốn thấy cách bạn giao tiếp và giải quyết vấn đề" - Nguyễn Văn B, Intern tại FPT Software

> "Practice makes perfect. Mình đã làm hơn 200 bài trên LeetCode trước khi phỏng vấn" - Trần Thị C, Intern tại VNG

## Kết luận

Phỏng vấn intern không khó như bạn nghĩ. Quan trọng là chuẩn bị kỹ càng và giữ tinh thần thoải mái.
    `,
    author: "Hồ Tuấn Phước",
    authorRole: "Trưởng Ban Văn bản - Kế hoạch",
    date: "2023-12-05",
    category: "Nghề nghiệp",
    image: "/placeholder.svg",
    tags: ["Interview", "Career", "Intern"]
  },
  {
    id: "5",
    title: "Workshop: Xây dựng ứng dụng Web với React và Node.js",
    slug: "workshop-react-nodejs",
    excerpt: "Tóm tắt workshop về cách xây dựng full-stack application với React frontend và Node.js backend.",
    content: `
# Workshop Overview

Vào ngày 15/11/2023, TDMU IT CLUB đã tổ chức workshop về xây dựng ứng dụng web full-stack với hơn 150 sinh viên tham gia.

## Nội dung workshop

### Phần 1: React Fundamentals (2 giờ)

- Components và Props
- State và Lifecycle
- Hooks (useState, useEffect)
- React Router

### Phần 2: Node.js Backend (2 giờ)

- Express.js setup
- REST API design
- Database integration với MongoDB
- Authentication với JWT

### Phần 3: Integration (1 giờ)

- Connect React với Node.js API
- Handle CORS
- Deploy lên Heroku

## Dự án thực hành

Xây dựng một ứng dụng Todo List với các tính năng:
- Đăng ký/Đăng nhập
- CRUD operations cho tasks
- Filter và search
- Real-time updates

## Code mẫu

### React Component

\`\`\`jsx
import { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);
  
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}
\`\`\`

### Node.js API

\`\`\`javascript
const express = require('express');
const app = express();

app.get('/api/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
\`\`\`

## Feedback từ học viên

- 95% học viên đánh giá workshop rất hữu ích
- 87% có thể tự làm project sau workshop
- 100% muốn tham gia các workshop tiếp theo

## Resources

- [Slide bài giảng](https://example.com/slides)
- [Source code](https://github.com/tdmu-it-club/workshop-react-nodejs)
- [Video recording](https://youtube.com/tdmu-it-club)

## Workshop tiếp theo

Tháng sau chúng tôi sẽ tổ chức workshop về:
- **AI/Machine Learning với Python**
- **Mobile App Development với React Native**
- **DevOps và CI/CD**

Đăng ký ngay để không bỏ lỡ!
    `,
    author: "Võ Hoàng Tuấn",
    authorRole: "Trưởng Ban Truyền thông",
    date: "2023-11-20",
    category: "Sự kiện",
    image: "/placeholder.svg",
    tags: ["Workshop", "React", "Node.js", "Full-stack"]
  },
  {
    id: "6",
    title: "Cộng đồng TDMU IT CLUB - Nơi kết nối đam mê công nghệ",
    slug: "cong-dong-tdmu-it-club",
    excerpt: "TDMU IT CLUB không chỉ là nơi học tập mà còn là một cộng đồng gắn kết, nơi các bạn trẻ đam mê công nghệ có thể cùng nhau phát triển.",
    content: `
# Về cộng đồng TDMU IT CLUB

## Giá trị cốt lõi

TDMU IT CLUB được thành lập với sứ mệnh tạo ra một môi trường học tập và phát triển tốt nhất cho sinh viên yêu thích công nghệ.

### 1. Học hỏi cùng nhau

Chúng tôi tin rằng học tập hiệu quả nhất khi được thực hiện trong một cộng đồng:
- Peer learning sessions
- Code review và feedback
- Pair programming workshops

### 2. Chia sẻ kinh nghiệm

Các thành viên senior luôn sẵn sàng chia sẻ:
- Kinh nghiệm thực tế từ các dự án
- Tips & tricks trong coding
- Lộ trình học tập hiệu quả

### 3. Networking

Kết nối với:
- Các sinh viên cùng đam mê
- Alumni đang làm việc tại các công ty lớn
- Đại diện từ các doanh nghiệp công nghệ

## Hoạt động cộng đồng

### Meetup hàng tuần

Mỗi thứ 6 hàng tuần:
- 18:00 - 19:00: Chia sẻ kiến thức
- 19:00 - 20:00: Networking và giao lưu
- 20:00 - 21:00: Coding challenge

### Hackathon

Tổ chức 2 lần/năm:
- 24 giờ coding marathon
- Giải quyết các vấn đề thực tế
- Giải thưởng hấp dẫn

### Study Group

Các nhóm học tập theo chuyên đề:
- Web Development
- Mobile Development
- AI/Machine Learning
- Data Science
- Competitive Programming

## Thành tích cộng đồng

- **500+** thành viên tích cực
- **50+** sự kiện đã tổ chức
- **100+** bài viết và tutorial
- **20+** dự án open source

## Lời kêu gọi

Bạn đam mê công nghệ? Muốn học hỏi và phát triển cùng những người bạn đồng hành?

**Hãy tham gia TDMU IT CLUB ngay hôm nay!**

Liên hệ:
- Facebook: TDMU IT CLUB
- Email: clbit@tdmu.edu.vn
- Hoặc đến trực tiếp phòng C101, Trường Đại học Thủ Dầu Một

## Testimonials

> "CLB đã giúp mình từ một newbie trở thành developer tự tin. Cảm ơn những người anh chị và các bạn trong CLB!" - Nguyễn Văn D, K22

> "Networking tại CLB đã giúp mình có được cơ hội intern tại một công ty công nghệ uy tín" - Trần Thị E, K21

## Kết luận

TDMU IT CLUB - Nơi ươm mầm những ý tưởng công nghệ và nuôi dưỡng đam mê lập trình. We code, therefore we are!
    `,
    author: "Nguyễn Thị Thu Huyền",
    authorRole: "Ban Văn bản - Kế hoạch",
    date: "2023-10-15",
    category: "Cộng đồng",
    image: "/placeholder.svg",
    tags: ["Cộng đồng", "TDMU", "Networking"]
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getRelatedPosts = (currentPostId: string, limit: number = 3): BlogPost[] => {
  const currentPost = blogPosts.find(post => post.id === currentPostId);
  if (!currentPost) return [];
  
  return blogPosts
    .filter(post => 
      post.id !== currentPostId && 
      post.category === currentPost.category
    )
    .slice(0, limit);
};
