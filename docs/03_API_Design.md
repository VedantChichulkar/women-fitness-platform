# API Design

## Overview

This document defines all REST API endpoints for the Women Fitness Platform.

API Base URL:

```
/api/v1
```

Authentication:

* JWT Authentication
* Role Based Access Control (RBAC)

Roles:

* Admin
* Member

---

# Authentication Module

## Register Member

POST

```
/api/v1/auth/register
```

Description:

Register a new member.

---

## Login

POST

```
/api/v1/auth/login
```

Description:

Authenticate user and return JWT token.

---

## Logout

POST

```
/api/v1/auth/logout
```

---

## Get Logged-in User

GET

```
/api/v1/auth/me
```

---

## Change Password

PUT

```
/api/v1/auth/change-password
```

---

## Forgot Password

POST

```
/api/v1/auth/forgot-password
```

---

## Reset Password

POST

```
/api/v1/auth/reset-password
```

---

# User Module

## Get User Profile

GET

```
/api/v1/users/profile
```

---

## Update Profile

PUT

```
/api/v1/users/profile
```

---

## Upload Profile Picture

POST

```
/api/v1/users/profile-image
```

---

# Membership Module

## View Membership

GET

```
/api/v1/membership
```

---

## Renew Membership

POST

```
/api/v1/membership/renew
```

---

## Membership History

GET

```
/api/v1/membership/history
```

---

# Payment Module

## Create Payment

POST

```
/api/v1/payments
```

---

## Payment History

GET

```
/api/v1/payments/history
```

---

## Verify Payment

POST

```
/api/v1/payments/verify
```

---

# Classes Module

## View All Classes

GET

```
/api/v1/classes
```

---

## View Single Class

GET

```
/api/v1/classes/:id
```

---

## Join Class

POST

```
/api/v1/classes/:id/join
```

---

## Leave Class

POST

```
/api/v1/classes/:id/leave
```

---

## View Recorded Sessions

GET

```
/api/v1/classes/recordings
```

---

# Attendance Module

## View Attendance

GET

```
/api/v1/attendance
```

---

## Attendance Summary

GET

```
/api/v1/attendance/summary
```

---

# Progress Module

## View Progress

GET

```
/api/v1/progress
```

---

## Add Progress

POST

```
/api/v1/progress
```

---

## Update Progress

PUT

```
/api/v1/progress/:id
```

---

# Notification Module

## Get Notifications

GET

```
/api/v1/notifications
```

---

## Mark Notification Read

PUT

```
/api/v1/notifications/:id/read
```

---

# AI Assistant Module

## Chat with AI

POST

```
/api/v1/ai/chat
```

---

## Chat History

GET

```
/api/v1/ai/history
```

---

# Admin Module

(Admin only)

## Dashboard

GET

```
/api/v1/admin/dashboard
```

---

## Student Management

### View Students

GET

```
/api/v1/admin/students
```

---

### View Student

GET

```
/api/v1/admin/students/:id
```

---

### Create Student

POST

```
/api/v1/admin/students
```

---

### Update Student

PUT

```
/api/v1/admin/students/:id
```

---

### Delete Student

DELETE

```
/api/v1/admin/students/:id
```

---

# Admin Class Management

## Create Class

POST

```
/api/v1/admin/classes
```

---

## Update Class

PUT

```
/api/v1/admin/classes/:id
```

---

## Delete Class

DELETE

```
/api/v1/admin/classes/:id
```

---

# Admin Attendance

## Mark Attendance

POST

```
/api/v1/admin/attendance
```

---

## Update Attendance

PUT

```
/api/v1/admin/attendance/:id
```

---

# Admin Payments

## View All Payments

GET

```
/api/v1/admin/payments
```

---

## Update Payment Status

PUT

```
/api/v1/admin/payments/:id
```

---

# Admin Notifications

## Send Notification

POST

```
/api/v1/admin/notifications
```

---

## Broadcast Notification

POST

```
/api/v1/admin/notifications/broadcast
```

---

# CMS Module

(Admin only)

## Get CMS Content

GET

```
/api/v1/admin/cms
```

---

## Update CMS Content

PUT

```
/api/v1/admin/cms/:page
```

---

# Reports Module

## Revenue Report

GET

```
/api/v1/admin/reports/revenue
```

---

## Attendance Report

GET

```
/api/v1/admin/reports/attendance
```

---

## Membership Report

GET

```
/api/v1/admin/reports/membership
```

---

## Student Growth Report

GET

```
/api/v1/admin/reports/students
```

---

# Future APIs

Reserved for future releases:

* QR Attendance
* Diet Plans
* Meal Tracking
* Smartwatch Integration
* Referral Program
* Rewards
* Reviews
* Feedback
* Coupons

---

# API Standards

All APIs return JSON.

Success Response:

```
{
  "success": true,
  "message": "...",
  "data": {}
}
```

Error Response:

```
{
  "success": false,
  "message": "...",
  "errors": []
}
```

HTTP Status Codes:

* 200 OK
* 201 Created
* 400 Bad Request
* 401 Unauthorized
* 403 Forbidden
* 404 Not Found
* 500 Internal Server Error

```
```
