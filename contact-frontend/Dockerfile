FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY contact-frontend/dist/contact/* /usr/share/nginx/html

# Expose port 80
EXPOSE 80
