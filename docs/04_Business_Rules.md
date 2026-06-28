# Business Rules

## Overview

This document defines the business logic and operational rules for the Women Fitness Platform.

These rules act as the source of truth for backend development, frontend behavior, and future feature implementation.

---

# User Roles

The system currently supports two roles.

## Admin

The business owner.

Admin has complete access to the platform.

Permissions:

* Create, update and delete students
* Manage memberships
* Manage payments
* Manage classes
* Mark attendance
* View reports
* Update website content
* Send notifications
* Manage AI knowledge base
* Manage settings

---

## Member

Registered student.

Permissions:

* View dashboard
* Update profile
* Join classes
* View attendance
* View progress
* Renew membership
* Chat with AI
* Receive notifications

Members cannot access admin resources.

---

# Authentication Rules

* Every member must register before accessing member features.
* Admin accounts cannot be created from the public registration page.
* Passwords must always be hashed.
* JWT authentication is required for protected routes.
* Sessions expire after a configurable duration.
* Users must re-login after token expiration.

---

# Membership Rules

* Every member must have one active membership.
* Membership has a start date and expiry date.
* Membership status can be:

  * Active
  * Pending
  * Expired
* Expired memberships lose access to premium features.
* Membership renewal extends the expiry date.

---

# Payment Rules

* Every successful payment creates a payment record.
* Payment history cannot be deleted.
* Admin can mark offline payments.
* Failed payments remain in history.
* Refunds must be recorded separately in the future.

---

# Fee Reminder Rules

Automatic reminders should be generated:

* 7 days before expiry
* 3 days before expiry
* 1 day before expiry
* On expiry day

Notification channels:

* In-app notification
* Push notification
* Email (future)
* WhatsApp (future)

---

# Birthday Rules

Every member receives a birthday greeting on their birthday.

Admin dashboard should display:

* Today's birthdays
* Upcoming birthdays

Birthday greetings should be automatic.

---

# Class Rules

Classes can be:

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

Members can only join active classes.

Cancelled classes cannot be joined.

Online classes require an active meeting link.

---

# Attendance Rules

Attendance belongs to a specific class.

Attendance status:

* Present
* Absent
* Late

Attendance can be marked:

* Manually by Admin
* Automatically in future (Zoom / QR)

Attendance history cannot be deleted.

---

# Progress Tracking Rules

Progress records are historical.

Old records should never be overwritten.

Each update creates a new progress entry.

Track:

* Weight
* BMI
* Waist
* Hips
* Chest
* Stamina
* Flexibility
* Notes

Members can view only their own progress.

Admin can view all progress.

---

# Notification Rules

Notification types:

* Birthday
* Fee Reminder
* Class Reminder
* Announcement
* Payment Confirmation

Notifications remain in history until deleted by the user.

Unread notifications should be highlighted.

---

# AI Assistant Rules

AI assistant answers only fitness-related topics.

Allowed topics:

* Yoga
* Zumba
* Nutrition
* Weight Loss
* Stretching
* Hydration
* Lifestyle
* Recovery

AI should refuse:

* Medical diagnosis
* Prescription advice
* Financial advice
* Legal advice
* Political topics
* Unrelated conversations

Every AI conversation is stored in chat history.

---

# CMS Rules

Only Admin can edit website content.

Editable pages:

* Home
* About Trainer
* Yoga
* Zumba
* Nutrition
* Pricing
* Gallery
* Contact

Changes become visible immediately after publishing.

---

# Profile Rules

Members may update:

* Weight
* Height
* Goal
* Phone
* Emergency Contact
* Profile Picture

Members cannot change:

* Role
* Membership Status
* Payment History

---

# Security Rules

Passwords are never stored in plain text.

Only authenticated users can access protected APIs.

Admin routes require Admin role.

Members cannot access another member's data.

Sensitive environment variables must never be exposed to the frontend.

---

# Reporting Rules

Admin dashboard displays:

* Total Members
* Active Memberships
* Expired Memberships
* Monthly Revenue
* Attendance Rate
* Upcoming Birthdays
* Class Statistics

Reports are read-only.

---

# Future Business Rules

Reserved for future versions:

* QR Attendance
* Multi-Trainer Support
* Branch Management
* Referral Rewards
* Loyalty Points
* Coupons
* Diet Plans
* Meal Tracking
* AI Posture Analysis
* Wearable Device Integration

---

# General Principles

The platform must always follow these principles:

* Security First
* Mobile First
* Responsive Design
* Scalable Architecture
* Modular Development
* Clean Code
* Automation Wherever Possible
* User Privacy
* High Performance
* Easy Maintenance

---

# Definition of Success

The system is considered successful when:

* The owner can manage the entire fitness business from one dashboard.
* Members can manage their complete fitness journey digitally.
* Routine operations (attendance, reminders, notifications) are automated.
* The platform provides a premium, secure, and scalable experience for both Admin and Members.
