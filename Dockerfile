FROM nginx:alpine

COPY dist/ /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY gzlawh.cn_nginx/gzlawh.cn.key /etc/nginx/ssl/gzlawh.cn.key
COPY gzlawh.cn_nginx/gzlawh.cn_bundle.crt /etc/nginx/ssl/gzlawh.cn_bundle.crt

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]