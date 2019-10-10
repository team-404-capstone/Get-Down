json.array! @comments do |comment|
    json.id comment.id
    json.user_email comment.user.email
    json.user_id comment.user.id
    json.comment comment.comment
end