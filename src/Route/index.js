import Home from '~/page/Home';
import Following from '~/page/Following';
import Profile from '~/page/Profile';
const PublicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
];
//cái ni dùng cho các Router không cần đăng nhập vẫn vào được
const PrivateRoutes = [];
//cái ni dùng cho các Router cần đăng nhập mới vào được, nếu không đăng nhập sẽ đưa qua login

export { PublicRoutes };
