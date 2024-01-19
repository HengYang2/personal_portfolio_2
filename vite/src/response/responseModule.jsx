export default function responseModule(selectedQuestion) {
    switch (selectedQuestion) {
        case 'AB0':
            return (["What are you doing inside my room?!! ... Well since you're already here, I'll answer any questions that you may have for me."]);
        case 'AB1':
            return (["My name is Heng Yang, I'm a software developer who enjoys creating games, making music, and any kind of creative expression :^)", "I like building things, for example this world you see here! I guess you can say that you're looking into a part of my mind right now!", 'Do you have any other questions?']);
        case 'AB2':
            return (['Why, in my room silly, hehe...', 'But on a more serious note, this is my personal portfolio, where you can interact with my room to learn more about me. :^)', 'Take a look at my shelf to see my other projects and tech stack!', 'Do you have any other questions?']);
        case 'AB3':
            return (['Besides coding, I enjoy 3d modeling in blender - As you can see by my beautiful mustachio ;)', 'I also enjoy creating music on FL-Studio and spending time with friends and family. :)', 'When I feel like thinking, I code. When I feel like building something, I create in blender. When I want to hear something new, I make music! Three different mediums, but they all fulfill my desire to create!', 'Do you have any other questions?']);
        case 'AB3':
            return (["My name is Heng Yang, I'm a software developer who enjoys creating games, making music, and any kind of creative expression :^)", "I like building things, for example this world you see here! I guess you can say that you're looking into a part of my mind right now!", 'Do you have any other questions?']);
        case 'AB4':
            return (["What else did you want to know?"]);


        case 'PJ0':
            return (['These are my projects that I have worked on in the past or am currently working on!', 'Try hovering over each trophy for a cool animation! Click on a trophy to learn more about that specific project!']);



        case 'TS0':
            return (['This is my bookshelf. It contains most of the tech stacks that I use!', "Try hovering over each book for a cool animation! I'll even read some of them for you. "]);




        case 'GIT0':
            return (['This desk and and macbook were modeled after real objects, that the real life me uses.', 'Click on my macbook and you will be able to send an email to the real me! ', 'Any other questions?']);



        case 'M0':
            return (["This is my BOOM-BOX! Isn't it lovely? I made it myself!", 'You can interact with the audio-track interface to listen to music composed by yours truly! :^)']);




        default:
            return (["hmm. i don't know what to say..........."]);
    }
}