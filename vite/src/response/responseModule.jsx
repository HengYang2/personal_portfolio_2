export default function responseModule(selectedQuestion) {

    const reactStory = '"React\'s Radiant Kingdom: A Tale of Web Sorcery \n - Summary: Embark on an epic journey through React\'s enchanted kingdom, where web sorcery shapes the destiny of realms."'
    const reduxSagasStory = '"Sagas of Redux Realms: Mystic Adventures Unfold - Summary: Unveil the mystic adventures within the sagas of Redux realms, where the threads of fate are rewoven."'
    const JavascriptStory = '"The JavaScript Chronicles: Wizards of the Code Realm - Summary: Join wizards in "The JavaScript Chronicles," where ancient code spells shape the destiny of the code realm."'
    const jqueryStory = '"Journey into Jquery: Whispers of Enchanted Elements - Summary: Hear the whispers of enchanted elements on a captivating journey into Jquery\'s mystical and responsive realms."'
    const nodejsStory = '"Node.js Odyssey: Guardians of the Server Forest - Summary: Become a guardian of the server forest in the Node.js odyssey, where the power of backends shapes destinies."'
    const gitStory = '"Git\'s Ancient Scrolls: Chronicles of GitHub Wizards - Summary: Uncover the ancient scrolls of Git, revealing the chronicles of GitHub wizards forging the future of repositories."'
    const sqlStory = '"SQL Sorcery: Quest for the Relational Crystal - Summary: Embark on a quest for the relational crystal in the realm of SQL sorcery, where databases unveil their magical powers."'
    const postgresStory = '"Postgres Pinnacle: Legends of the Open Source Citadel - Summary: Explore the open-source citadel and discover the legends of Postgres, where databases reach their pinnacle."'
    const hostingerStory = '"Hostinger\'s Harmony: Secrets of the Hosting Elders - Summary: Enter Hostinger\'s realm of harmony and unveil the secrets guarded by hosting elders, shaping online landscapes."'
    const awsStory = '"AWS Alchemy: Cloud Realms and Virtual Enchantments - Summary: Master the art of AWS alchemy, where cloud realms and virtual enchantments transform the digital landscape."'
    const muiStory = '"Material UI Mosaic: Artifacts of the User Interface Realm - Summary: Immerse yourself in the Material UI mosaic, where artifacts of the user interface realm craft seamless and elegant experiences."'
    const threeJsStory = '"Three.js Quest: A Journey through 3D Enchantments - Summary: Embark on a quest through 3D enchantments in the realm of Three.js, where visuals come to life in a mesmerizing journey."'



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
            return (["How may I help you?"]);


        case 'PJ0':
            return (['These are my projects that I have worked on in the past or am currently working on!', 'Try hovering over each trophy for a cool animation! Click on a trophy to learn more about that specific project!']);
        case 'PROJECT1':
            return (['"Know Your Hours" ']);

        case 'PROJECT2':
            return (['These are my projects that I have worked on in the past or am currently working on!']);

        case 'PROJECT3':
            return (['These are my projects that I have worked on in the past or am currently working on!']);

        case 'PROJECT4':
            return (['These are my projects that I have worked on in the past or am currently working on!']);
        case 'PROJECT5':
            return (['These are my projects that I have worked on in the past or am currently working on!']);



        case 'TS0':
            return (['This is my bookshelf. It contains most of the tech stacks that I use!', "Try hovering over each book for a cool animation! Also try clicking on one, I'll even read it for you. "]);
        case 'REACT':
            return ([reactStory]);
        case 'REDUX / SAGAS':
            return ([reduxSagasStory]);
        case 'JAVASCRIPT':
            return ([JavascriptStory]);
        case 'JQUERY':
            return ([jqueryStory]);
        case 'NODE.JS':
            return ([nodejsStory]);
        case 'GIT / GITHUB':
            return ([gitStory]);
        case 'SQL':
            return ([sqlStory]);
        case 'POSTGRES':
            return ([postgresStory]);
        case 'HOSTINGER':
            return ([hostingerStory]);
        case 'AWS':
            return ([awsStory]);
        case 'MATERIAL UI':
            return ([muiStory]);
        case 'THREE.JS':
            return ([threeJsStory]);




        case 'GIT0':
            return (['This desk and and macbook were modeled after real objects, that the real life me uses.', 'Click on my macbook and you will be able to send an email to the real me! ', 'Any other questions?']);



        case 'M0':
            return (["This is my BOOM-BOX! Isn't it lovely? I made it myself!", 'You can interact with the audio-track interface to listen to music composed by yours truly! :^)']);




        default:
            return (["hmm. i don't know what to say..........."]);
    }
}

// 1. "*React's Radiant Kingdom: A Tale of Web Sorcery\n- Summary: Embark on an epic journey through React's enchanted kingdom, where web sorcery shapes the destiny of realms.*"

// 2. Sagas of Redux Realms: Mystic Adventures Unfold
//    - Summary: Unveil the mystic adventures within the sagas of Redux realms, where the threads of fate are rewoven.

// 3. The JavaScript Chronicles: Wizards of the Code Realm
//    - Summary: Join wizards in "The JavaScript Chronicles," where ancient code spells shape the destiny of the code realm.

// 4. Journey into Jquery: Whispers of Enchanted Elements
//    - Summary: Hear the whispers of enchanted elements on a captivating journey into Jquery's mystical and responsive realms.

// 5. Node.js Odyssey: Guardians of the Server Forest
//    - Summary: Become a guardian of the server forest in the Node.js odyssey, where the power of backends shapes destinies.

// 6. Git's Ancient Scrolls: Chronicles of GitHub Wizards
//    - Summary: Uncover the ancient scrolls of Git, revealing the chronicles of GitHub wizards forging the future of repositories.

// 7. SQL Sorcery: Quest for the Relational Crystal
//    - Summary: Embark on a quest for the relational crystal in the realm of SQL sorcery, where databases unveil their magical powers.

// 8. Postgres Pinnacle: Legends of the Open Source Citadel
//    - Summary: Explore the open-source citadel and discover the legends of Postgres, where databases reach their pinnacle.

// 9. Hostinger's Harmony: Secrets of the Hosting Elders
//    - Summary: Enter Hostinger's realm of harmony and unveil the secrets guarded by hosting elders, shaping online landscapes.

// 10. AWS Alchemy: Cloud Realms and Virtual Enchantments
//     - Summary: Master the art of AWS alchemy, where cloud realms and virtual enchantments transform the digital landscape.

// 11. Material UI Mosaic: Artifacts of the User Interface Realm
//     - Summary: Immerse yourself in the Material UI mosaic, where artifacts of the user interface realm craft seamless and elegant experiences.

// 12. Three.js Quest: A Journey through 3D Enchantments
//     - Summary: Embark on a quest through 3D enchantments in the realm of Three.js, where visuals come to life in a mesmerizing journey.
