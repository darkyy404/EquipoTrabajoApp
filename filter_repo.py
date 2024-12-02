def callback(commit):
    if commit.committer_email == b"104600479+darkyy404@users.noreply.github.com":
        commit.committer_email = b"alejandroyg3@gmail.com"
        commit.committer_name = b"Alejandro Yepes"
    if commit.author_email == b"104600479+darkyy404@users.noreply.github.com":
        commit.author_email = b"alejandroyg3@gmail.com"
        commit.author_name = b"Alejandro Yepes"
