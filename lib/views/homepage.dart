import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        primary: true,
        title: const Text(
          "FarmXpert",
          style: TextStyle(
            fontSize: 30,
            color: Colors.white
          ),
        ),
        centerTitle: true,  // This centers the title in the AppBar
        backgroundColor: const Color.fromARGB(255, 0, 117, 4),
      ),
      body: const Center(
        child: Text(
          'Welcome to FarmXpert!',
          style: TextStyle(fontSize: 24),
        ),
      ),
    );
  }
}
