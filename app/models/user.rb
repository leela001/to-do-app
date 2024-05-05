class User < ApplicationRecord
    # It is used for authentication purposes, provides a way to securely store passwords in the database
    #  and authenticate users.
    # "has_secure_password" --  automatically hashes the password before saving
    # It adds a virtual attribute called "password_confirmation"
    # When you create or update a User object, it automatically validates that the password and password_confirmation match.
    # authentication -- It adds a method called authenticate to the model. This method takes a password as an argument, hashes it, and compares it to the hashed password stored in the database. If the two match, it returns the user object; otherwise, it returns false.
    has_secure_password
    validates :password_confirmation, presence: true, confirmation: {message: "must match password"}
    validates :email, uniqueness: {message: "already taken!"}
    has_many :tasks




end
