1. React Native Error: ENOSPC: System limit for number of file watchers reached
	+ https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached

2. các lỗi không render ra được khi làm router:
- viết Children sai <children>
- logic sai:
 ```
 let Layout = Defaultlayout;

                        if(route.layout===null){
                            Layout=Fragment
                        }else{
                            Layout=route.layout
                        };
```
3. import classNames from 'classname/bind' viết thiếu bind không chạy được 