import {HeaderOnly} from '~/component/Layout'
import Home from '~/page/Home';
import Following from '~/page/Following';
import Profile from '~/page/Profile';
import Upload from '~/page/Upload';
import Search from '~/page/Search';


const PublicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload , layout: HeaderOnly },
    { path: '/search', component: Search , layout: null },
];
//cái ni dùng cho các Router không cần đăng nhập vẫn vào được
const PrivateRoutes = [];
//cái ni dùng cho các Router cần đăng nhập mới vào được, nếu không đăng nhập sẽ đưa qua login

export { PublicRoutes };
