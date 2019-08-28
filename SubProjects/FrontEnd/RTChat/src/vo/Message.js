const Message = {
    makeMessage(from, to, command, data) {
        return {
            from: from,
            to: to,
            command: command,
            data: data
        };
    }
};

export default Message;