json.array! @comments do |comment|
    json.id comment.id
    json.user_username comment.user.username
    json.user_id comment.user.id
    json.comment comment.comment
end