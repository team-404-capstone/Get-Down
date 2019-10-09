json.array! @attends do |attend|
    json.id attend.id
    json.user_email attend.user.email
end