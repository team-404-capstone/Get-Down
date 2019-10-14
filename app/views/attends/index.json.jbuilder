json.array! @attends do |attend|
    json.id attend.id
    json.user_username attend.user.username
    json.user_id attend.user.id
end