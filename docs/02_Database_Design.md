# Database Design

## Overview

The Women Fitness Platform follows a modular database design. Each collection represents a specific business module and is linked through unique IDs. This structure is scalable and allows future expansion without major schema changes.

---

# Database Collections

The application will contain the following collections:

1. Users
2. Memberships
3. Payments
4. Classes
5. Attendance
6. Progress
7. Notifications
8. CMS
9. AI Chats

---

# 1. Users Collection

Purpose:
Stores all registered users.

Role Types:

* Admin
* Member

Fields:

* _id
* fullName
* email
* phone
* password
* role
* gender
* dateOfBirth
* age
* height
* weight
* goal
* batchTiming
* profileImage
* subscriptionStatus
* emergencyContact
* medicalConditions
* createdAt
* updatedAt

Relationship:

One User
→ One Membership

One User
→ Many Payments

One User
→ Many Attendance Records

One User
→ Many Progress Records

One User
→ Many Notifications

One User
→ Many AI Chats

---

# 2. Membership Collection

Purpose:

Stores subscription information separately from the user.

Fields:

* _id
* userId
* planName
* amount
* startDate
* expiryDate
* paymentStatus
* membershipStatus
* createdAt

Relationship:

One Membership belongs to One User.

---

# 3. Payment Collection

Purpose:

Stores complete payment history.

Fields:

* _id
* userId
* membershipId
* amount
* paymentMethod
* transactionId
* invoiceNumber
* paymentStatus
* paymentDate

Relationship:

Many Payments belong to One User.

---

# 4. Classes Collection

Purpose:

Stores all Yoga and Zumba sessions.

Fields:

* _id
* title
* classType
* mode
* trainer
* description
* meetingLink
* location
* capacity
* startDate
* startTime
* endTime
* status

Class Types:

* Yoga
* Zumba

Modes:

* Online
* Offline

Status:

* Upcoming
* Live
* Completed
* Cancelled

---

# 5. Attendance Collection

Purpose:

Stores attendance history.

Fields:

* _id
* userId
* classId
* attendanceDate
* status

Status:

* Present
* Absent
* Late

Relationship:

One User

↓

Many Attendance Records

---

# 6. Progress Collection

Purpose:

Tracks member fitness journey.

Fields:

* _id
* userId
* weight
* BMI
* waist
* hips
* chest
* stamina
* flexibility
* notes
* progressDate

Relationship:

One User

↓

Many Progress Records

---

# 7. Notifications Collection

Purpose:

Stores notifications.

Fields:

* _id
* userId
* title
* message
* type
* isRead
* createdAt

Notification Types:

* Birthday
* Fee Reminder
* Class Reminder
* Announcement

---

# 8. CMS Collection

Purpose:

Allows Admin to update website content.

Fields:

* _id
* page
* title
* content
* images
* updatedBy
* updatedAt

Pages:

* Home
* About Trainer
* Yoga
* Zumba
* Pricing
* Gallery
* Contact

---

# 9. AI Chat Collection

Purpose:

Stores AI conversations.

Fields:

* _id
* userId
* question
* answer
* createdAt

---

# Entity Relationships

User

↓

Membership

↓

Payments

User

↓

Attendance

↓

Classes

User

↓

Progress

User

↓

Notifications

User

↓

AI Chats

---

# Future Collections

Reserved for future versions:

* Trainers
* Diet Plans
* Meal Logs
* QR Attendance
* Referral System
* Reward Points
* Reviews
* Feedback
* Coupons

---

# Database Design Principles

The database follows these principles:

* Modular Design
* Separation of Concerns
* Scalable Collections
* Normalized Relationships
* Secure Data Storage
* Future Expandability

---

# Security Considerations

Passwords:
Never store plain text passwords.

Authentication:
JWT Tokens.

Payment Data:
Never store sensitive card information.

Images:
Store only Cloudinary URLs.

AI Conversations:
Store only user questions and AI responses.

---

# Expected Database Size

The design should comfortably support:

* 10,000+ members
* 100,000+ attendance records
* 500,000+ notifications
* Years of payment history
* Large AI chat history

without requiring schema redesign.
